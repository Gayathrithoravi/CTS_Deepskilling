CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest
AS
BEGIN

    UPDATE Accounts
    SET Balance = Balance + (Balance * 0.01);

    COMMIT;

END;
/

BEGIN
    ProcessMonthlyInterest;
END;
/



CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(
    p_department IN VARCHAR2,
    p_bonus_percent IN NUMBER
)
AS
BEGIN

    UPDATE Employees
    SET Salary = Salary +
                 (Salary * p_bonus_percent / 100)
    WHERE Department = p_department;

    COMMIT;

END;
/

BEGIN
    UpdateEmployeeBonus('IT',10);
END;
/



CREATE OR REPLACE PROCEDURE TransferFunds(
    p_from_account IN NUMBER,
    p_to_account IN NUMBER,
    p_amount IN NUMBER
)
AS
BEGIN

    UPDATE Accounts
    SET Balance = Balance - p_amount
    WHERE AccountID = p_from_account;

    UPDATE Accounts
    SET Balance = Balance + p_amount
    WHERE AccountID = p_to_account;

    COMMIT;

END;
/

BEGIN
    TransferFunds(1,2,500);
END;
/



SELECT * FROM Customers;
SELECT * FROM Accounts;
SELECT * FROM Employees;