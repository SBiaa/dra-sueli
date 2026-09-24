export function TestimonialCard({
  quote,
  author,
  context,
}: {
  quote: string;
  author: string;
  context?: string;
}) {
  return (
    <figure className="rounded-2xl border border-brand-brown/10 bg-white p-6 shadow-sm">
      <blockquote className="text-brand-brown-dark/80">
        <span className="mr-1 font-serif text-3xl leading-none text-brand-gold">&ldquo;</span>
        {quote}
      </blockquote>
      <figcaption className="mt-4 text-sm font-medium text-brand-brown-dark">
        {author}
        {context && <span className="block font-normal text-brand-brown-dark/60">{context}</span>}
      </figcaption>
    </figure>
  );
}
