import Link from 'next/link'

interface PracticeAreaCardProps {
  title: string
  description: string
  href: string
  icon?: React.ReactNode
}

export default function PracticeAreaCard({
  title,
  description,
  href,
  icon,
}: PracticeAreaCardProps) {
  return (
    <Link href={href} className="group">
      <article className="card h-full hover:border-primary-300 hover:shadow-lg">
        {icon && (
          <div className="w-12 h-12 rounded-lg bg-primary-50 text-primary-700 flex items-center justify-center mb-4 group-hover:bg-primary-100 transition-colors">
            {icon}
          </div>
        )}
        <h3 className="font-serif text-xl font-semibold text-primary-900 mb-3 group-hover:text-primary-700 transition-colors">
          {title}
        </h3>
        <p className="text-primary-600 leading-relaxed">
          {description}
        </p>
        <div className="mt-4 flex items-center text-primary-700 font-medium group-hover:text-primary-900">
          <span>Mehr erfahren</span>
          <svg
            className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </article>
    </Link>
  )
}
