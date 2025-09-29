import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ExpandableTextProps {
  text: string;
  maxLength?: number;
  className?: string;
}

const ExpandableText: React.FC<ExpandableTextProps> = ({ 
  text, 
  maxLength = 150, 
  className = "" 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const shouldTruncate = text.length > maxLength;
  const displayText = isExpanded ? text : text.slice(0, maxLength);

  return (
    <div className={className}>
      <p className="text-muted-foreground leading-relaxed">
        {shouldTruncate ? (
          <>
            {/* Desktop: Show full text */}
            <span className="hidden md:inline">{text}</span>
            
            {/* Mobile: Show truncated/expandable text */}
            <span className="md:hidden">
              {displayText}
              {!isExpanded && shouldTruncate && '...'}
            </span>
          </>
        ) : (
          text
        )}
      </p>
      
      {/* Mobile only: Show expand/collapse button */}
      {shouldTruncate && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="md:hidden flex items-center gap-1 mt-2 text-sm text-brand-primary hover:text-brand-secondary transition-colors"
        >
          {isExpanded ? (
            <>
              <span>Show less</span>
              <ChevronUp className="w-4 h-4" />
            </>
          ) : (
            <>
              <span>View more</span>
              <ChevronDown className="w-4 h-4" />
            </>
          )}
        </button>
      )}
    </div>
  );
};

export default ExpandableText;