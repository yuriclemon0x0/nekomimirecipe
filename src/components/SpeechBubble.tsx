interface Props {
  text: string;
  color: string;
  colorLight: string;
  direction?: 'bottom-left' | 'bottom-right' | 'top-left';
  className?: string;
}

export default function SpeechBubble({ text, color, colorLight, direction = 'bottom-left', className = '' }: Props) {
  const tailStyles: Record<string, React.CSSProperties> = {
    'bottom-left': {
      bottom: -10,
      left: 18,
      borderWidth: '10px 7px 0',
      borderStyle: 'solid',
      borderColor: `${color} transparent transparent`,
    },
    'bottom-right': {
      bottom: -10,
      right: 18,
      left: 'auto',
      borderWidth: '10px 7px 0',
      borderStyle: 'solid',
      borderColor: `${color} transparent transparent`,
    },
    'top-left': {
      top: -10,
      left: 18,
      borderWidth: '0 7px 10px',
      borderStyle: 'solid',
      borderColor: `transparent transparent ${color}`,
    },
  }

  return (
    <div
      className={`relative rounded-2xl px-4 py-3 text-sm font-medium leading-relaxed ${className}`}
      style={{ backgroundColor: colorLight, color: '#555', border: `2px solid ${color}30` }}
    >
      {text}
      <div className="absolute w-0 h-0" style={tailStyles[direction]} />
    </div>
  )
}
