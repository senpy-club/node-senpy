export const SENPY_CLUB_API_BASE_URl = "https://api.senpy.club";
export const SENPY_CLUB_API_CURRENT_VERSION = 2;
export const SENPY_CLUB_API_URl = `${SENPY_CLUB_API_BASE_URl}/v${SENPY_CLUB_API_CURRENT_VERSION}`;

export interface Random {
  readonly language: string;
  readonly image: string;
}

export const languages = (): string[] => {
  let response;

  fetch(`${SENPY_CLUB_API_URl}/languages`)
    .then((api) => api.json())
    .then((api) => {
      response = api;
    });

  return response;
};

export const language = (language: string): string[] => {
  let response;

  fetch(`${SENPY_CLUB_API_URl}/language/${language}`)
    .then((api) => api.json())
    .then((api) => {
      response = api;
    });

  return response;
};

export const random = (): Random => {
  let response;

  fetch(`${SENPY_CLUB_API_URl}/random`)
    .then((api) => api.json())
    .then((api) => {
      response = api;
    });

  return response;
};

export const status = (): boolean => {
  let response;

  fetch(`${SENPY_CLUB_API_URl}`)
    .then(() => {
      response = true;
    })
    .catch(() => {
      response = false;
    });

  return response;
};
