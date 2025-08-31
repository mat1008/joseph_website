import React from 'react';

interface PersonCardProps {
  fullName: string;
  country: string; // e.g. "France 🇫🇷"
  job?: string; // e.g. "Software Engineer"; optional for athletes
  age?: number | string; // e.g. 29 -> "29 yo"
  sports?: string; // e.g. "Trail, Ultra Trail"
  achievements?: string; // free text, bullets or separated by •
  credentials?: string; // e.g. "X - Cambridge"
  imageUrl?: string;
  imageAlt?: string;
  className?: string;
}

const PersonCard: React.FC<PersonCardProps> = ({
  fullName,
  country,
  job,
  age,
  sports,
  achievements,
  credentials,
  imageUrl,
  imageAlt,
  className = '',
}) => {
  return (
    <div className={`bg-dark-secondary rounded-lg p-6 ${className}`}>
      {imageUrl && (
        <img
          src={imageUrl}
          alt={imageAlt || fullName}
          className="w-16 h-16 rounded-full object-cover mb-4"
          loading="lazy"
        />
      )}
      <h4 className="text-xl font-semibold">{fullName}</h4>
      <p className="text-gray-400">
        {age ? `${age} yo • ${country}` : country}
      </p>
      {credentials && <p className="text-gray-400">{credentials}</p>}
      {sports && <p className="text-gray-300">{sports}</p>}
      {job && <p className="text-gray-300">{job}</p>}
      {achievements && (
        <p className="text-gray-200 mt-2 text-sm">{achievements}</p>
      )}
    </div>
  );
};

export default PersonCard;
