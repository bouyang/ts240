interface Account {
  username: string;
  email: string;
  readonly accountCreationDate: string;
}

const userAccount: Account = {
  username: "johndoe123",
  email: "john@example.com",
  accountCreationDate: "2023-01-01",
};

userAccount.username = 'johndoe000';
// userAccount.accountCreationDate = '2024-01-02';