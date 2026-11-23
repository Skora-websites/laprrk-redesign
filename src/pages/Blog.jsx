import { useState, useEffect, useRef, useMemo } from "react";
import { BLOG_POSTS } from "../data/blogData";
import { useBooking } from "../booking";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import TablerIcon from "../components/TablerIcon";
import BottomCTA from "../components/BottomCTA";
import FlowButton from "../components/ui/flow-button";

const CATEGORIES = [
  "All Articles",
  "Applied AI & GenAI",
  "Software Testing & QA",
  "IT Hiring",
  "Corporate Training",
  "Cloud & Infrastructure",
  "Leadership & GCC",
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All Articles");
  const [selectedPost, setSelectedPost] = useState(null);
  const { openBooking } = useBooking();
  const triggerRef = useRef(null);
  const modalRef = useRef(null);

  const postCounts = useMemo(() => {
    const counts = { "All Articles": BLOG_POSTS.length };
    BLOG_POSTS.forEach((post) => {
      counts[post.category] = (counts[post.category] || 0) + 1;
    });
    return counts;
  }, []);

  const filteredPosts =
    activeCategory === "All Articles"
      ? BLOG_POSTS
      : BLOG_POSTS.filter((post) => post.category === activeCategory);

  const isAll = activeCategory === "All Articles";
  const featuredPost = isAll && filteredPosts.length > 0 ? filteredPosts[0] : null;
  const streamPosts = isAll && filteredPosts.length > 0 ? filteredPosts.slice(1) : filteredPosts;

  const openPost = (post) => {
    triggerRef.current = document.activeElement;
    setSelectedPost(post);
  };

  const closePost = () => {
    setSelectedPost(null);
  };

  // Close overlay on Escape key, trap focus & lock background scroll
  useEffect(() => {
    if (!selectedPost) return undefined;

    document.body.style.overflow = "hidden";

    // Auto-focus close button
    const closeBtn = modalRef.current?.querySelector(".overlay-close-btn");
    closeBtn?.focus();

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closePost();
        return;
      }

      if (e.key === "Tab" && modalRef.current) {
        const focusables = Array.from(
          modalRef.current.querySelectorAll(
            'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
          )
        ).filter((node) => node.offsetParent !== null);
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
      if (triggerRef.current && typeof triggerRef.current.focus === "function") {
        triggerRef.current.focus();
      }
    };
  }, [selectedPost]);

  return (
    <div className="blog-page">
      <PageHero
        crumb="Resources / Blog & Insights"
        title="Field notes from our engineering bench."
        lead="Practical guides on applied AI, test automation, practitioner hiring, and technical upskilling written by active developers—not marketing generalists."
        facts={[
          { value: "6", label: "Architecture guides" },
          { value: "100%", label: "Written by practitioners" },
          { value: "Zero", label: "Marketing fluff" },
        ]}
        actions={
          <FlowButton
            text="Discuss Architecture"
            variant="solid"
            onClick={() => openBooking({ topic: "Technical discussion" })}
          />
        }
      />

      {/* Category Filter Bar */}
      <section className="blog-filter-section" aria-label="Article categories">
        <div className="shell">
          <div className="blog-filter-bar">
            <div className="blog-filter-tabs" role="tablist" aria-label="Filter guides by topic">
              {CATEGORIES.map((cat) => {
                const count = postCounts[cat] || 0;
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    className={`blog-filter-tab ${isActive ? "active" : ""}`}
                    onClick={() => setActiveCategory(cat)}
                  >
                    <span className="filter-tab-label">{cat}</span>
                    <span className="filter-tab-count" aria-label={`${count} guides`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="blog-filter-summary">
              <span className="filter-count-badge">
                {activeCategory === "All Articles"
                  ? `${BLOG_POSTS.length} Architecture Guides`
                  : `${filteredPosts.length} in ${activeCategory}`}
              </span>
              {activeCategory !== "All Articles" && (
                <button
                  type="button"
                  className="filter-clear-link"
                  onClick={() => setActiveCategory("All Articles")}
                  aria-label="Clear filter to show all guides"
                >
                  <TablerIcon name="x" size={13} />
                  <span>Show all</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid with Interactive Overlay Cards */}
      <section className="section blog-stream-section" aria-label="Technical articles">
        <div className="shell">
          {/* Featured Post Hero Card (Only on "All Articles") */}
          {featuredPost && (
            <div className="blog-featured-wrap">
              <Reveal as="article" className="blog-featured-card">
                <div
                  className="blog-featured-media"
                  onClick={() => openPost(featuredPost)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      openPost(featuredPost);
                    }
                  }}
                  aria-label={`Open featured guide: ${featuredPost.title}`}
                >
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="blog-featured-img"
                    loading="eager"
                  />
                  <div className="blog-featured-badge-overlay">
                    <span className="blog-featured-flag">Featured Architecture Guide</span>
                  </div>
                </div>

                <div className="blog-featured-content">
                  <div className="blog-card-top">
                    <span className="blog-category-badge">{featuredPost.category}</span>
                    <div className="blog-meta-right">
                      <span className="blog-read-time">{featuredPost.readTime}</span>
                      <span className="blog-meta-sep">•</span>
                      <span className="blog-date">{featuredPost.date}</span>
                    </div>
                  </div>

                  <h2
                    className="blog-featured-title"
                    onClick={() => openPost(featuredPost)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        openPost(featuredPost);
                      }
                    }}
                  >
                    {featuredPost.title}
                  </h2>
                  <p className="blog-featured-excerpt">{featuredPost.lead}</p>

                  <div className="blog-card-takeaways-preview">
                    <div className="preview-label">
                      <TablerIcon name="check" size={13} />
                      <span>Key Takeaway</span>
                    </div>
                    <p className="preview-text">{featuredPost.takeaways[0]}</p>
                  </div>

                  <div className="blog-featured-bottom">
                    <div className="blog-author-byline">
                      <div className="author-dot-chip">
                        <TablerIcon name="code" size={14} />
                      </div>
                      <span className="author-name-text">Laprrk Engineering Practice</span>
                    </div>
                    <button
                      type="button"
                      className="blog-card-open-btn featured-open-btn"
                      onClick={() => openPost(featuredPost)}
                      aria-haspopup="dialog"
                    >
                      <span>Read full guide</span>
                      <TablerIcon name="arrow-right" size={16} />
                    </button>
                  </div>
                </div>
              </Reveal>
            </div>
          )}

          {/* Grid Stream of Articles */}
          <div className="blog-modern-grid">
            {streamPosts.map((post, idx) => (
              <Reveal as="article" key={post.id} className="blog-card-modern" delay={idx * 60}>
                <div
                  className="blog-card-media"
                  onClick={() => openPost(post)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      openPost(post);
                    }
                  }}
                  aria-label={`Open article: ${post.title}`}
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="blog-card-img"
                    loading="lazy"
                  />
                  <div className="blog-card-media-overlay">
                    <span className="blog-category-badge-overlay">{post.category}</span>
                  </div>
                </div>

                <div className="blog-card-body">
                  <div className="blog-card-top">
                    <div className="blog-meta-right">
                      <span className="blog-read-time">{post.readTime}</span>
                      <span className="blog-meta-sep">•</span>
                      <span className="blog-date">{post.date}</span>
                    </div>
                  </div>

                  <h2
                    className="blog-card-title blog-card-title-clickable"
                    onClick={() => openPost(post)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        openPost(post);
                      }
                    }}
                  >
                    {post.title}
                  </h2>
                  <p className="blog-card-excerpt">{post.lead}</p>

                  {/* Key takeaways teaser */}
                  <div className="blog-card-takeaways-preview">
                    <div className="preview-label">
                      <TablerIcon name="check" size={13} />
                      <span>Key Takeaway</span>
                    </div>
                    <p className="preview-text">{post.takeaways[0]}</p>
                  </div>

                  <div className="blog-card-bottom">
                    <button
                      type="button"
                      className="blog-card-open-btn"
                      onClick={() => openPost(post)}
                      aria-haspopup="dialog"
                    >
                      <span>Read full technical guide</span>
                      <TablerIcon name="arrow-right" size={16} />
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Full Article Detail Modal Overlay */}
      {selectedPost && (
        <div
          className="overlay-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-blog-title"
          onClick={closePost}
        >
          <div
            className="overlay-modal-panel overlay-blog-panel"
            ref={modalRef}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Bar */}
            <div className="overlay-header-bar">
              <div className="overlay-header-tags">
                <span className="blog-category-badge">{selectedPost.category}</span>
                <span className="overlay-timing-chip">{selectedPost.readTime}</span>
                <span className="overlay-date-chip">{selectedPost.date}</span>
              </div>
              <button
                type="button"
                className="overlay-close-btn"
                onClick={closePost}
                aria-label="Close article overlay"
              >
                <TablerIcon name="x" size={20} />
              </button>
            </div>

            {/* Modal Scrollable Article Body */}
            <div className="overlay-content-scroll">
              {selectedPost.image && (
                <div className="overlay-hero-banner-wrap">
                  <img
                    src={selectedPost.image}
                    alt={selectedPost.title}
                    className="overlay-hero-banner"
                  />
                </div>
              )}
              <span className="overlay-kicker">{selectedPost.kicker}</span>
              <h2 id="modal-blog-title" className="overlay-article-title">
                {selectedPost.title}
              </h2>

              <div className="overlay-author-banner">
                <div className="author-avatar-chip">
                  <TablerIcon name="code" size={16} />
                </div>
                <div className="author-meta-text">
                  <span className="author-name">Laprrk Engineering Practice</span>
                  <span className="author-creds">Greater Noida & Louisville Delivery Centres</span>
                </div>
              </div>

              <p className="overlay-article-lead">{selectedPost.lead}</p>

              {/* Takeaways Callout Box */}
              <div className="overlay-takeaways-callout">
                <div className="takeaways-header">
                  <TablerIcon name="shield-check" size={18} />
                  <span>Executive & Practitioner Takeaways</span>
                </div>
                <ul className="takeaways-bullets">
                  {selectedPost.takeaways.map((point, pIdx) => (
                    <li key={pIdx}>
                      <TablerIcon name="check" size={15} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Deep-Dive Article Sections */}
              <div className="overlay-sections-body">
                {selectedPost.sections.map((sec, sIdx) => (
                  <section key={sIdx} className="overlay-section-block">
                    <h3 className="overlay-sec-heading">{sec.heading}</h3>
                    <div className="overlay-sec-prose">
                      {sec.content.split("\n\n").map((chunk, cIdx) => {
                        if (chunk.startsWith("```")) {
                          const cleanCode = chunk.replace(/```[a-z]*/g, "").trim();
                          return (
                            <pre key={cIdx} className="overlay-code-block">
                              <code>{cleanCode}</code>
                            </pre>
                          );
                        }
                        return <p key={cIdx}>{chunk}</p>;
                      })}
                    </div>
                  </section>
                ))}
              </div>

              {/* Modal Footer CTA Strip */}
              <div className="overlay-article-footer">
                <div className="footer-note">
                  <strong>Practitioner Note:</strong> Every pattern documented here is shipped and
                  benchmarked in production under Laprrk client NDAs.
                </div>
                <div className="footer-actions">
                  <FlowButton
                    text="Discuss Architecture"
                    variant="solid"
                    onClick={() => {
                      const postTitle = selectedPost.title;
                      closePost();
                      openBooking({
                        topic: `Discuss Architecture: ${postTitle}`,
                        prefill: `I would like to discuss implementing the patterns from your "${postTitle}" guide.`,
                      });
                    }}
                  />
                  <FlowButton
                    text="Close Guide"
                    variant="primary"
                    onClick={closePost}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <BottomCTA topic="Architecture consultation" />
    </div>
  );
}
