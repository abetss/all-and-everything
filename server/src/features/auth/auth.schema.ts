export const authTypeDefs = `
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    fullName: String!
    email: String!
  }
`;

export const authResolvers = {
	User: {
		fullName: (parent: any, args: any) => {
			return `${parent.firstName} ${parent.lastName}`;
		}
	}
};
