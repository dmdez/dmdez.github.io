import type { GatsbyNode } from "gatsby"

type Profile = {
    login: string;
    id: string;
    avatar_url: string;
}

export const sourceNodes: GatsbyNode["sourceNodes"] = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const { createNode } = actions

  const response = await fetch('https://api.github.com/users/dmdez')
  const profile: Profile = await response.json();
  const node = {
    ...profile,
    parent: null,
    children: [],
    id: createNodeId(`profile__${profile.id}`),
    internal: {
    type: "Profile",
    content: JSON.stringify(profile),
    contentDigest: createContentDigest(profile),
    },
  }

  createNode(node)
}