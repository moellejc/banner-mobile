import * as AuthService from "./auth.service";
import * as MeService from "./me.service";
import * as TokenService from "./token.service";
import * as LocationService from "./location.service";
import * as PlaceService from "./location.service";
import * as TrackingService from "./location.service";

//C2626048

// restore state for various services from secure storage
export const restore = async () => {
  await TokenService.restore();
};

export const Services = {
  AuthService,
  MeService,
  TokenService,
  LocationService,
  PlaceService,
  TrackingService,
  restore,
};
