import { Faker, faker } from "@faker-js/faker";

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  avatar: string;
  email: string;
}

export const createUser = (): User => {
  return {
    id: faker.datatype.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
  };
};
export const createUsers = (numUsers: number): User[] => {
  return Array.from({ length: numUsers }, createUser);
};

export interface Place {
  id: string;
  name: string;
  address: string;
  coverImageURL: string;
  avatarImageURL: string;
}

export interface Media {
  id: string;
  mediaType: string;
  url: string;
}

export const createMedia = (): Media => {
  // NOTE: only image media
  return {
    id: faker.datatype.uuid(),
    mediaType: "image",
    url: faker.image.imageUrl(),
  };
};

export interface Comment {
  id: string;
  message: string;
  postDate: Date;
  user: User;
  children?: Comment;
}

export const createComment = (): Comment => {
  // NOTE: children not implemented
  return {
    id: faker.datatype.uuid(),
    message: faker.lorem.sentence(),
    user: createUser(),
    postDate: faker.date.recent(),
  };
};

export const createComments = (numComments: number): Comment[] => {
  return Array.from({ length: numComments }, createComment);
};

export interface Post {
  id: string;
  postDate: Date;
  user: User;
  placeName: string;
  totalComments: number;
  content: {
    message: string;
    postType: string;
    media: Media[];
  };
  comments?: Comment[];
}

export const createPost = (): Post => {
  const totalComments = faker.datatype.number({ min: 0, max: 10 });

  return {
    id: faker.datatype.uuid(),
    postDate: faker.date.recent(),
    totalComments: totalComments,
    user: createUser(),
    placeName: faker.lorem.words(2),
    content: {
      message: faker.lorem.sentence(),
      postType: "image",
      media: [createMedia()],
    },
    comments: createComments(totalComments),
  };
};

export const createPosts = (numPosts: number): Post[] => {
  return Array.from({ length: numPosts }, createPost);
};
