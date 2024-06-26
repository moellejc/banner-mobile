import { Faker, faker } from "@faker-js/faker";

const TEST_PLACE = "Paycor Stadium";
const TEST_PLACE_TYPE = "Statium";
const TEST_PLACE_CATEGORY = "Commercial";
const TEST_PLACE_SERVICES: string[] = [];
const TEST_PLACE_HOUR = "";
const TEST_PLACE_MIN_PEOPLE = 1000000;
const TEST_PLACE_MAX_PEOPLE = 3000000;
const TEST_PLACE_PERCISION_PEOPLE = 10000;
const TEST_POSTS_PLACE = "Cincinnati Bengals";
const TEST_POSTS_RECENT_DAYS = 30;

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
  placeType: string;
  placeCategory: string;
  totalPeople: number;
  totalFavorites: number;
  hours?: string;
  address?: string;
  coverImageURL: string;
  avatarImageURL?: string;
  services?: string[];
  feedSections?: PlaceFeedSection[];
  nearBy?: Place[];
}

export const createPlace = (
  name: string = TEST_PLACE,
  isTruncated: boolean = false
): Place => {
  // NOTE: address not implemented
  return {
    id: faker.datatype.uuid(),
    name: name,
    placeType: TEST_PLACE_TYPE,
    placeCategory: TEST_PLACE_CATEGORY,
    totalPeople: faker.datatype.number({
      min: TEST_PLACE_MIN_PEOPLE,
      max: TEST_PLACE_MAX_PEOPLE,
      precision: TEST_PLACE_PERCISION_PEOPLE,
    }),
    totalFavorites: faker.datatype.number({
      min: 1000000,
      max: 5000000,
      precision: 10000,
    }),
    coverImageURL: faker.image.imageUrl(640, 480, name),
    avatarImageURL: faker.image.imageUrl(100, 100, name),
    services: isTruncated ? undefined : TEST_PLACE_SERVICES,
    feedSections: isTruncated ? undefined : createPlaceFeedSections(),
    nearBy: isTruncated ? undefined : createNearbyPlaces(),
  };
};

export const createNearbyPlace = (name: string): Place => {
  return createPlace(name, true);
};

export const createNearbyPlaces = (): Place[] => {
  return [
    createNearbyPlace("The Banks"),
    createNearbyPlace("Great American Ballpark"),
    createNearbyPlace("Heritage Bank Center"),
    createNearbyPlace("Holy Grail Tavern & Grill"),
    createNearbyPlace("Ruth's Chris Steak House"),
    createNearbyPlace("Taste of Belgium"),
    createNearbyPlace("Moerlein Lager House"),
    createNearbyPlace("Jefferson Social"),
    createNearbyPlace("E+O Kitchen"),
  ];
};

export const createPlaceHierarchy = () => {};

export interface PlaceFeedSection {
  id: string;
  title: string;
}

export const createPlaceFeedSections = (): PlaceFeedSection[] => {
  return [
    {
      id: "header",
      title: "",
    },
    {
      id: "services",
      title: "SERVICES",
    },
    {
      id: "tickets",
      title: "TICKETS",
    },
    {
      id: "people",
      title: "PEOPLE",
    },
    {
      id: "nearby",
      title: "NEARBY",
    },
    {
      id: "posts",
      title: "POSTS",
    },
    {
      id: "padding",
      title: "",
    },
  ];
};
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
    url: faker.image.imageUrl(640, 480, TEST_POSTS_PLACE),
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
    postDate: faker.date.recent(10),
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
    postDate: faker.date.recent(TEST_POSTS_RECENT_DAYS),
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
