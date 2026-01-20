import Link from 'next/link'
import Image from 'next/image'

interface AttorneyCardProps {
  name: string
  title?: string
  specializations?: string[]
  email?: string
  href: string
  imageUrl?: string
}

export default function AttorneyCard({
  name,
  title,
  specializations = [],
  email,
  href,
  imageUrl,
}: AttorneyCardProps) {
  return (
    <Link href={href} className="group">
      <article className="card h-full hover:border-primary-300 hover:shadow-lg">
        <div className="flex items-start gap-4">
          {imageUrl ? (
            <div className="relative w-20 h-20 rounded-full overflow-hidden bg-primary-100 flex-shrink-0">
              <Image
                src={imageUrl}
                alt={name}
                fill
                className="object-cover"
                sizes="80px"
              />
            </div>
          ) : (
            <div className="w-20 h-20 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
              <svg
                className="w-10 h-10 text-primary-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
          )}
          <div className="flex-grow min-w-0">
            <h3 className="font-serif text-lg font-semibold text-primary-900 group-hover:text-primary-700 transition-colors">
              {name}
            </h3>
            {title && (
              <p className="text-primary-600 text-sm mt-1">{title}</p>
            )}
          </div>
        </div>

        {specializations.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {specializations.map((spec) => (
              <span
                key={spec}
                className="inline-block px-2 py-1 text-xs font-medium bg-primary-50 text-primary-700 rounded"
              >
                {spec}
              </span>
            ))}
          </div>
        )}

        {email && (
          <p className="mt-4 text-sm text-primary-600">
            {email}
          </p>
        )}

        <div className="mt-4 flex items-center text-primary-700 font-medium text-sm group-hover:text-primary-900">
          <span>Profil ansehen</span>
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
