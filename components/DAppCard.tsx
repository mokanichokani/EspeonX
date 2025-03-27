interface DApp {
  id: number
  name: string
  category: string
  description: string
}

export default function DAppCard({ dapp }: { dapp: DApp }) {
  return (
    <div className="rounded-lg bg-card p-6 shadow-lg transition-shadow hover:shadow-glow">
      <h3 className="mb-2 text-xl font-semibold">{dapp.name}</h3>
      <span className="mb-4 inline-block rounded-full bg-accent-blue px-3 py-1 text-xs font-semibold">
        {dapp.category}
      </span>
      <p className="text-sm text-gray-400">{dapp.description}</p>
      <button className="mt-4 rounded-full bg-accent-purple px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-opacity-90">
        Learn More
      </button>
    </div>
  )
}

