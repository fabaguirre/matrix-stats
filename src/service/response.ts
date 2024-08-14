export const STATUS_CODES = {
  OK: 200,
  BAD_REQUEST: 400,
  INTERNAL_SERVER_ERROR: 500,
} as const;

export const success = ({
  data,
  message,
}: {
  data?: unknown;
  message?: string;
}) => {
  return {
    success: true,
    message,
    data,
    status: STATUS_CODES.OK,
  };
};

export const error = ({
  message,
  status,
}: {
  message: string;
  status: number;
}) => {
  return {
    success: false,
    message,
    status,
  };
};
