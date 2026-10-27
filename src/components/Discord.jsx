import { Avatar, AvatarGroup } from "@chakra-ui/react";
import useDiscordInfo from "../../hooks/useDiscordInfo";
import { GUILDID, DISCORDINVITECODE } from "../../config/globals";
import { useTranslation } from "react-i18next";

function DiscordWidget() {
  const { t } = useTranslation();
  const { infos } = useDiscordInfo(GUILDID);

  if (!infos) return null;

  const membersOnline = infos.members ?? [];

  return (
    <a
      href={`https://discord.com/invite/${DISCORDINVITECODE}`}
      className="group flex items-center gap-4 self-start rounded-lg border border-white/[0.08] bg-neutral-900 py-2.5 pl-4 pr-3 transition-colors hover:border-white/20 lg:self-auto"
    >
      <span className="flex items-center gap-2 text-sm">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-40 motion-reduce:hidden" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
        </span>
        <span className="text-neutral-200">
          <span className="font-mono">{infos.presence_count}</span>{" "}
          {t("online")}
        </span>
      </span>

      {membersOnline.length > 0 && (
        <AvatarGroup size="xs" max={5} spacing="-0.4rem" fontSize="10px">
          {membersOnline.map((member) => (
            <Avatar
              name={member.username}
              src={member.avatar_url}
              key={member.id}
              bg="gray.600"
              borderColor="#171717"
            />
          ))}
        </AvatarGroup>
      )}

      <span className="text-sm text-neutral-500 transition-colors group-hover:text-neutral-200">
        {t("join")} →
      </span>
    </a>
  );
}

export default DiscordWidget;
