import { Role } from "discord.js";

export function isValidHttpUrl(urlString: string) {
  let url;
  try {
    url = new URL(urlString);
  } catch (_) {
    return false;
  }

  return url.protocol === "http:" || url.protocol === "https:";
}

export const sequentialAsyncMap = async (list: any[], asyncFunction: any) => {
  list.reduce((p, guildRule) => {
    return p.then(() => asyncFunction(guildRule));
  }, new Promise((resolve) => resolve(null)));
};

export const uniqueRoleFilter = (uniqueRoleIds: Role[], item: Role) =>
  uniqueRoleIds.some((i) => i.id == item.id)
    ? uniqueRoleIds
    : [...uniqueRoleIds, item];

export const guildRoleDictToGuildRoleNameDict = (guildRoleDict: {
  [guildId: string]: Role[];
}) => {
  const guildRoleNameDict: { [guildId: string]: string[] } = {};

  for (const guildId of Object.keys(guildRoleDict)) {
    guildRoleNameDict[guildId] = guildRoleDict[guildId].map(
      (role) => role.name
    );
  }

  return guildRoleNameDict;
};

export const defaultGuildDict = (
  guildConfigsSnapshot: FirebaseFirestore.QuerySnapshot<FirebaseFirestore.DocumentData>
) => {
  const guildDict: { [guildId: string]: any[] } = {};
  guildConfigsSnapshot.docs.forEach((doc) => {
    guildDict[doc.id] = [];
  });
  return guildDict;
};
