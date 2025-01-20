export type Gender = "M" | "F";

export type FamilyMember = {
  key: number;
  parent?: number;
  group?: number;
  name: string;
  gender: Gender;
  birthYear: string;
  deathYear?: string;
  reign?: string;
  photo?: string;
};

export type FamilyGroup = {
  key: number;
  name?: string;
  isGroup: boolean;
  headOfFamily: number;
};

export type Relationship = {
  from: number;
  to: number;
};
