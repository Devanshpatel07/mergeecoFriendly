import React from 'react';
import { cn } from '@/lib/utils';
import { Sparkles, Leaf, Recycle, MapPin, Heart, Clock } from 'lucide-react';

interface BadgeProps {
  label: string;
  variant?: 'forest' | 'leaf' | 'earth' | 'cream' | 'gold' | 'muted';
  icon?: 'leaf' | 'recycle' | 'bhopal' | 'women' | 'sparkles' | 'clock';
  className?: string;
}

export function Badge({ label, variant = 'forest', icon, className }: BadgeProps) {
  const variantStyles = {
    forest: 'bg-forest/10 text-forest border-forest/20',
    leaf: 'bg-leaf/15 text-forest-dark border-leaf/30',
    earth: 'bg-earth/15 text-earth-dark border-earth/30',
    cream: 'bg-cream text-ink border-earth/20 shadow-sm',
    gold: 'bg-[#D49B44]/15 text-[#9A6A1A] border-[#D49B44]/30',
    muted: 'bg-gray-100 text-gray-700 border-gray-200',
  };

  const renderIcon = () => {
    const iconClass = 'w-3.5 h-3.5 mr-1.5 shrink-0';
    switch (icon) {
      case 'leaf':
        return <Leaf className={iconClass} />;
      case 'recycle':
        return <Recycle className={iconClass} />;
      case 'bhopal':
        return <MapPin className={iconClass} />;
      case 'women':
        return <Heart className={iconClass} />;
      case 'clock':
        return <Clock className={iconClass} />;
      case 'sparkles':
      default:
        return <Sparkles className={iconClass} />;
    }
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide border transition-colors',
        variantStyles[variant],
        className
      )}
    >
      {icon && renderIcon()}
      {label}
    </span>
  );
}
