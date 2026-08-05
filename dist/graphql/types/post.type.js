export const postTypeDefs = `#graphql
  type UserType {
    id: ID!
    username: String!
    email: String!
    profilePic: String
  }

  type CommentType {
    id: ID!
    text: String!
    userId: UserType
    createdAt: String
  }

  type PostType {
    id: ID!
    content: String!
    media: [PostMedia]
    user: UserType!
    likes: [UserType]
    comments: [CommentType] # Virtual Populate Field
    createdAt: String!
  }

  type PostMedia {
    url: String!
    mediaType: String!
  }

  type Query {
    # (Required & Optional args) -> limit اختياري, id اختياري
    getAllPosts(limit: Int): [PostType!]!
    getPostById(id: ID!): PostType
    getProfile: UserType # بيحتاج Context Authentication
  }
`;
//# sourceMappingURL=post.type.js.map