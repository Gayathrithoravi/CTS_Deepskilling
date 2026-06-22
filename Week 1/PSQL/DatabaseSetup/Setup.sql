CREATE TABLE Customers (
    CustomerID NUMBER PRIMARY KEY,
    Name VARCHAR2(100),
    DOB DATE,
    Balance NUMBER,
    LastModified DATE,
    IsVIP VARCHAR2(5)
);

CREATE TABLE Accounts (
    AccountID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    AccountType VARCHAR2(20),
    Balance NUMBER,
    LastModified DATE,
    FOREIGN KEY (CustomerID)
    REFERENCES Customers(CustomerID)
);

CREATE TABLE Transactions (
    TransactionID NUMBER PRIMARY KEY,
    AccountID NUMBER,
    TransactionDate DATE,
    Amount NUMBER,
    TransactionType VARCHAR2(10),
    FOREIGN KEY (AccountID)
    REFERENCES Accounts(AccountID)
);

CREATE TABLE Loans (
    LoanID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    LoanAmount NUMBER,
    InterestRate NUMBER,
    StartDate DATE,
    EndDate DATE,
    FOREIGN KEY (CustomerID)
    REFERENCES Customers(CustomerID)
);

CREATE TABLE Employees (
    EmployeeID NUMBER PRIMARY KEY,
    Name VARCHAR2(100),
    Position VARCHAR2(50),
    Salary NUMBER,
    Department VARCHAR2(50),
    HireDate DATE
);


INSERT INTO Customers
VALUES (
    1,
    'John Doe',
    TO_DATE('1950-05-15','YYYY-MM-DD'),
    12000,
    SYSDATE,
    NULL
);

INSERT INTO Customers
VALUES (
    2,
    'Jane Smith',
    TO_DATE('1990-07-20','YYYY-MM-DD'),
    1500,
    SYSDATE,
    NULL
);

INSERT INTO Accounts
VALUES (
    1,
    1,
    'Savings',
    1000,
    SYSDATE
);

INSERT INTO Accounts
VALUES (
    2,
    2,
    'Checking',
    1500,
    SYSDATE
);

INSERT INTO Loans
VALUES (
    1,
    1,
    5000,
    5,
    SYSDATE,
    SYSDATE + 20
);

INSERT INTO Loans
VALUES (
    2,
    2,
    7000,
    7,
    SYSDATE,
    SYSDATE + 60
);

COMMIT;
