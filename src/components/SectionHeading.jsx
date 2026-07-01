const SectionHeading = ({ label, title, description }) => (
  <div className="mx-auto max-w-3xl text-center">
    {label && (
      <p className="mb-4 text-sm uppercase tracking-[0.24em] text-accent">{label}</p>
    )}
    <h2 className="text-3xl font-heading font-semibold tracking-tight text-primary sm:text-4xl">
      {title}
    </h2>
    {description && (
      <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
        {description}
      </p>
    )}
  </div>
)

export default SectionHeading
