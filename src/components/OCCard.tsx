import { Link } from 'react-router-dom'
import type { OC } from '../data/ocs'
import SpeechBubble from './SpeechBubble'

export default function OCCard({ oc }: { oc: OC }) {
  return (
    <Link to={`/oc/${oc.id}`} className="group block animate-fade-in">
      <div
        className="rounded-3xl p-6 transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1 bg-white border-2"
        style={{ borderColor: oc.color.light }}
      >
        {/* Chibi icon */}
        <div className="flex justify-center mb-4">
          {oc.chibiFaceUrl ? (
            <img
              src={oc.chibiFaceUrl}
              alt={oc.name}
              className="w-24 h-24 rounded-full object-cover border-4"
              style={{ borderColor: oc.color.primary }}
            />
          ) : (
            <div
              className="w-24 h-24 rounded-full flex items-center justify-center text-5xl border-4 shadow-md"
              style={{ backgroundColor: oc.color.veryLight, borderColor: oc.color.light }}
            >
              {oc.emoji}
            </div>
          )}
        </div>

        {/* Name */}
        <div className="text-center mb-4">
          <p className="text-xs text-gray-400 mb-1">{oc.nameKana}</p>
          <h2 className="text-xl font-bold" style={{ color: oc.color.primary }}>
            {oc.name}
          </h2>
          <p className="text-xs text-gray-500 mt-1 line-clamp-2">{oc.description}</p>
        </div>

        {/* Speech bubble */}
        <SpeechBubble
          text={oc.catchphrase}
          color={oc.color.primary}
          colorLight={oc.color.veryLight}
          direction="top-left"
        />

        {/* Footer */}
        <div
          className="mt-5 text-center text-sm font-medium rounded-full py-2 transition-all group-hover:opacity-100 opacity-80"
          style={{ backgroundColor: oc.color.light, color: oc.color.primary }}
        >
          詳細を見る →
        </div>
      </div>
    </Link>
  )
}
