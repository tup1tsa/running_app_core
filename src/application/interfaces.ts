export interface Coordinates {
  readonly latitude: number;
  readonly longitude: number;
}

export interface PositionInTime extends Coordinates {
  readonly time: number;
}

export interface Race {
  readonly type: string;
  readonly path: ReadonlyArray<PositionInTime>;
}

interface RaceLimits {
  readonly minSpeed: number;
  readonly maxSpeed: number;
  readonly maximumTimeBetweenPointsSecs: number;
}

export interface RaceSettings {
  readonly walking: RaceLimits;
  readonly running: RaceLimits;
  readonly cycling: RaceLimits;
}

export interface LocalStorage {
  getItem(item: string): string | null;
  setItem(item: string, data: string): void;
}

export interface RegularRegistrationInfo {
  readonly name: string;
  readonly email: string;
  readonly password: string;
  readonly passwordConfirmation: string;
}

export interface HashedUserInfo {
  readonly name: string;
  readonly email: string;
  readonly passwordHash: string;
  readonly salt: string;
  readonly accessToken: string;
}

export interface TotalUserInfo extends HashedUserInfo {
  readonly _id?: string;
  readonly isEmailVerified: boolean;
  readonly passwordResetLink: string;
  readonly emailVerificationLink: string;
}

export interface RegularLoginInfo {
  readonly email: string;
  readonly password: string;
}

export interface PublicUserInfo {
  readonly name: string;
  readonly email: string;
  readonly isEmailVerified: boolean;
}

export type GetPath = (positions: ReadonlyArray<PositionInTime>) => number;

export type GetDistance = (start: Coordinates, end: Coordinates) => number;

export type GetSpeed = (start: Coordinates, end: Coordinates) => number;

export interface MomentInterface {
  duration(
    timeMs: number
  ): {
    readonly humanize: () => string;
  };
  (timestamp: number): {
    format(type: string): string;
  };
}

export type DateClass = new (time: number) => {
  toLocaleTimeString: () => string;
};
