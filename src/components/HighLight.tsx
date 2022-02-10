import React from 'react';

const HighLight = () => {
  const highlightedText = (text: string, query: string) => {
    if (query !== '' && text.includes(query)) {
      const parts = text.split(new RegExp(`(${query})`, 'gi'));

      return (
        <>
          {parts.map((part: string, index: number) =>
            part.toLowerCase() === query.toLowerCase() ? (
              <mark key={index}>{part}</mark>
            ) : (
              part
            )
          )}
        </>
      );
    }

    return text;
  };
  return (
    <div>
      {highlightedText(
        '(닫힌거)거 다시 수정합니다.닫힌 아이고 두야 닫힌',
        '닫힌'
      )}
    </div>
  );
};

export default HighLight;
