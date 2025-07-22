import { useSocialMedia } from "./hooks/useSocialMedia";


export const SocialMedia = ({ id }: { id: number }) => {
  const socialMediaData = useSocialMedia(id);

  if (!socialMediaData) {
    return null;
  }

  const { filteredSocialMedia, theme, data } = socialMediaData;

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {filteredSocialMedia.map(({ key, icon: Icon, web }) => (
        <a
          href={`${web}${data[key]}`}
          key={key}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Ir a ${key}`}
          style={{ display: "flex", alignItems: "center", gap: "5px", textDecoration: "none", color: "black" }}
        >
          <Icon style={{ fontSize: "24px", color: theme === 'dark' ? 'white' : 'black' }} />
        </a>
      ))}
    </div>
  );
};

