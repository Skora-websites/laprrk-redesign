import { Link } from "../router";
import HeroBackdrop from "./HeroBackdrop";
import PixelatedHeadline from "./ui/PixelatedHeadline";

export default function PageHero({ crumb, title, lead, facts = [], actions, visual, children }) {
  return (
    <section className="page-hero" aria-labelledby="page-title">
      <HeroBackdrop />
      <div className="shell page-hero-inner">
        <nav className="page-crumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span className="page-crumb-sep" aria-hidden="true">
            /
          </span>
          <span aria-current="page">{crumb}</span>
        </nav>

        <div className="page-hero-body">
          <div className="page-hero-copy">
            <PixelatedHeadline as="h1" id="page-title">{title}</PixelatedHeadline>
            <p className="page-hero-lead">{lead}</p>
            {actions && <div className="page-hero-actions">{actions}</div>}
          </div>

          {visual ? (
            <div className="page-hero-visual-col">{visual}</div>
          ) : facts.length > 0 ? (
            <dl className="page-facts" data-count={facts.length}>
              {facts.map((fact) => (
                <div key={fact.label}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value || fact.num}</dd>
                </div>
              ))}
            </dl>
          ) : null}
        </div>

        {children}
      </div>
    </section>
  );
}
