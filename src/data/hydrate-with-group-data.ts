import { FamilyGroup, FamilyMember } from "../types/data-types";
import * as go from "gojs";

const groups: FamilyGroup[] = [
  { key: -1, isGroup: true, headOfFamily: 7, name: "Family of Elizabeth II" },
  {
    key: -2,
    isGroup: true,
    headOfFamily: 8,
    name: "Family of Princess Margaret",
  },
  {
    key: -3,
    isGroup: true,
    headOfFamily: 9,
    name: "Family of George Lascelles",
  },
  {
    key: -4,
    isGroup: true,
    headOfFamily: 10,
    name: "Family of Gerald Lascelles",
  },
  {
    key: -5,
    isGroup: true,
    headOfFamily: 11,
    name: "Family of Prince William of Gloucester",
  },
  {
    key: -6,
    isGroup: true,
    headOfFamily: 12,
    name: "Family of Prince Richard",
  },
  { key: -7, isGroup: true, headOfFamily: 13, name: "Family of Prince Edward" },
  {
    key: -8,
    isGroup: true,
    headOfFamily: 14,
    name: "Family of Princess Alexandra",
  },
  {
    key: -9,
    isGroup: true,
    headOfFamily: 15,
    name: "Family of Prince Michael of Kent",
  },
];

// keeps information about what children each parent has - represents hierarchical relation in a family tree
const parentKeyToChildrenKeys = new Map<go.Key, go.Key[]>();

// keeps information about familyKey for each node
const memberKeyToGroupKey = new Map<go.Key, go.Key>();

// traverses whole family tree in DFS manner and remembers for each member what is its familyKey
const traverseFamilyTree = (
  groupKey: go.Key,
  currentMemberKey: go.Key,
  memory: Map<go.Key, go.Key>
): void => {
  memory.set(currentMemberKey, groupKey);

  (parentKeyToChildrenKeys.get(currentMemberKey) || []).forEach((childKey) =>
    traverseFamilyTree(groupKey, childKey, memory)
  );
};

export const hydrateDataWithGroups = (nodes: FamilyMember[]) => {
  nodes.forEach((node) => {
    if (node.parent) {
      if (!parentKeyToChildrenKeys.has(node.parent)) {
        parentKeyToChildrenKeys.set(node.parent, []);
      }
      parentKeyToChildrenKeys.get(node.parent)!.push(node.key);
    }
  });

  groups.forEach((group) => {
    traverseFamilyTree(group.key, group.headOfFamily, memberKeyToGroupKey);
  });

  const nodesWithGroupKeys = nodes.map((node) => {
    const groupKey = memberKeyToGroupKey.get(node.key);
    return groupKey ? { ...node, group: groupKey } : node;
  });

  return [...nodesWithGroupKeys, ...groups];
};
