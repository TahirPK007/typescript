interface user {
  name: string;
  email: string;
}
interface admin {
  name: string;
  email: string;
  isadmin: boolean;
}

function isadminaccount(account: user | admin) {
  if ("isadmin" in account) {
    return account.isadmin;
  }
}
