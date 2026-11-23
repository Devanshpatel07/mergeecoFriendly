import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  titleClassName?: string;
  light?: boolean;
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  centered = true,
  className,
  titleClassName,
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'mb-10 md:mb-14',
        centered ? 'text-center max-w-3xl mx-auto' : 'text-left max-w-2xl',
        className
      )}
    >
      {badge && (
        <div className={cn('inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border shadow-sm',
          light ? 'bg-cream/10 text-cream border-cream/20' : 'bg-cream text-forest border-forest/15'
        )}>
          <span className="w-1.5 h-1.5 rounded-full bg-earth animate-pulse" />
          {badge}
        </div>
      )}
      <h2
        className={cn(
          'text-3xl md:text-4xl lg:text-5xl font-serif font-bold tracking-tight leading-tight',
          light ? 'text-cream' : 'text-forest-dark',
          titleClassName
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-4 text-base md:text-lg leading-relaxed',
            light ? 'text-cream/80' : 'text-ink-muted'
          )}
        >
          {subtitle}
        </p>
      )}
      <div className={cn('flex items-center gap-2 mt-4', centered ? 'justify-center' : 'justify-start')}>
        <span className={cn('h-0.5 w-10 rounded-full', light ? 'bg-leaf' : 'bg-forest')} />
        <span className="h-1.5 w-1.5 rounded-full bg-earth" />
        <span className={cn('h-0.5 w-10 rounded-full', light ? 'bg-leaf' : 'bg-forest')} />
      </div>
    </div>
  );
}
