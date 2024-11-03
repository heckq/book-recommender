from fastapi import HTTPException, status

credentials_exception = HTTPException(
    status_code=status.HTTP_401_UNAUTHORIZED,
    detail='Could not validate credentials',
)

forbidden_exception = HTTPException(
    status_code=status.HTTP_403_FORBIDDEN,
    detail='You do not have permission to access this resource.',
)

user_already_exists = HTTPException(
    status_code=status.HTTP_400_BAD_REQUEST,
    detail='User with this email already exists'
)

invalid_data = HTTPException(
    status_code=status.HTTP_403_FORBIDDEN,
    detail='Invalid email or password'
)


missing_access_token = HTTPException(
    status_code=status.HTTP_401_UNAUTHORIZED,
    detail="Access token missing"
)

invalid_access_token = HTTPException(
    status_code=status.HTTP_401_UNAUTHORIZED,
    detail="Invalid  access token"
)

expired_access_token = HTTPException(
    status_code=status.HTTP_401_UNAUTHORIZED,
    detail="expired  access token"
)

expire_refresh_token = HTTPException(
    status_code=status.HTTP_401_UNAUTHORIZED,
    detail="Expired refresh token"
)

invalid_email_token = HTTPException(
    status_code=status.HTTP_400_BAD_REQUEST,
    detail="invalid email token"
)



passwords_do_not_match = HTTPException(
    status_code=status.HTTP_400_BAD_REQUEST,
    detail="passwords_do_not_match"
)