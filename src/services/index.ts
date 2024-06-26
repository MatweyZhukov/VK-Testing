const $host = async (url: string) => {
  const response = await fetch(`${process.env.REACT_APP_PUBLIC_API_URL}${url}`);

  if (!response.ok) {
    const errorData = await response.json();

    throw new Error(errorData.message);
  }

  return response.json();
};

export { $host };
