import type { FoodItem, OCColor } from '../data/ocs'

interface Props {
  food: FoodItem;
  color: OCColor;
  onRecipeClick: (food: FoodItem) => void;
}

const typeLabel: Record<FoodItem['type'], string> = {
  food: 'フード',
  drink: 'ドリンク',
  dessert: 'デザート',
  snack: 'おやつ',
}

export default function FoodCard({ food, color, onRecipeClick }: Props) {
  return (
    <div
      className="bg-white rounded-2xl overflow-hidden border-2 transition-all hover:shadow-lg hover:-translate-y-0.5"
      style={{ borderColor: color.light }}
    >
      <div
        className="h-36 flex items-center justify-center text-6xl"
        style={{ backgroundColor: color.veryLight }}
      >
        {food.imageUrl ? (
          <img src={food.imageUrl} alt={food.name} className="w-full h-full object-cover" />
        ) : (
          <span className="filter drop-shadow-md">{food.emoji}</span>
        )}
      </div>

      <div className="p-4">
        <span
          className="inline-block text-xs font-medium px-2 py-0.5 rounded-full mb-2"
          style={{ backgroundColor: color.light, color: color.primary }}
        >
          {typeLabel[food.type]}
        </span>

        <h3 className="font-bold text-base mb-1">{food.name}</h3>
        <p className="text-xs text-gray-500 leading-relaxed mb-3">{food.description}</p>

        <div
          className="text-xs p-2.5 rounded-xl mb-3 italic leading-relaxed"
          style={{ backgroundColor: color.veryLight, color: '#666', borderLeft: `3px solid ${color.primary}` }}
        >
          「{food.ocComment}」
        </div>

        {food.recipe && (
          <button
            onClick={() => onRecipeClick(food)}
            className="w-full py-2 rounded-xl text-sm font-medium transition-all hover:opacity-90 active:scale-95"
            style={{ backgroundColor: color.primary, color: color.textOnPrimary }}
          >
            📖 レシピを見る
          </button>
        )}
      </div>
    </div>
  )
}
