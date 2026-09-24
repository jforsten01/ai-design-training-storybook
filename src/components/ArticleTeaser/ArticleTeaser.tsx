import type { AnchorHTMLAttributes, ElementType } from 'react';

import './ArticleTeaser.css';

export type ArticleTeaserProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  'children' | 'href'
> & {
  href: string;
  headline: string;
  category: string;
  imageSrc: string;
  imageAlt: string;
  timeLabel?: string;
  dateTime?: string;
  headingLevel?: 'h2' | 'h3';
};

export function ArticleTeaser({
  category,
  className = '',
  dateTime,
  headingLevel = 'h2',
  headline,
  href,
  imageAlt,
  imageSrc,
  timeLabel,
  ...linkProps
}: ArticleTeaserProps) {
  const Heading = headingLevel as ElementType;
  const classes = ['article-teaser', className].filter(Boolean).join(' ');

  return (
    <article className={classes}>
      <a className="article-teaser__link" href={href} {...linkProps}>
        <div className="article-teaser__media">
          <img alt={imageAlt} src={imageSrc} />
        </div>
        <div className="article-teaser__content">
          <Heading className="article-teaser__headline">{headline}</Heading>
          <div className="article-teaser__metadata">
            <span className="article-teaser__category">{category}</span>
            {timeLabel ? <time dateTime={dateTime}>{timeLabel}</time> : null}
          </div>
        </div>
      </a>
    </article>
  );
}
