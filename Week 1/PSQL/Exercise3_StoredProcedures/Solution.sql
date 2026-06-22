-- =====================================================
-- EXERCISE 3 : STORED PROCEDURES
-- =====================================================

-- =====================================================
-- SCENARIO 1 : Process Monthly Interest
-- =====================================================

CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest
AS
BEGIN
UPDATE Accounts
SET Balance = Balance + (Balance * 0.01);

```
DBMS_OUTPUT.PUT_LINE('Monthly interest processed successfully');

COMMIT;
```

END;
/

SET SERVEROUTPUT ON;

BEGIN
ProcessMonthlyInterest;
END;
/

SELECT * FROM Accounts;

-- =====================================================
-- SCENARIO 2 : Update Employee Bonus
-- =====================================================

CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(
p_department IN VARCHAR2,
p_bonus_percent IN NUMBER
)
AS
BEGIN
UPDATE Employees
SET Salary = Salary + (Salary * p_bonus_percent / 100)
WHERE Department = p_department;

```
DBMS_OUTPUT.PUT_LINE('Bonus updated successfully');

COMMIT;
```

END;
/

SET SERVEROUTPUT ON;

BEGIN
UpdateEmployeeBonus('IT',10);
END;
/

SELECT * FROM Employees;

-- =====================================================
-- SCENARIO 3 : Transfer Funds
-- =====================================================

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

```
UPDATE Accounts
SET Balance = Balance + p_amount
WHERE AccountID = p_to_account;

DBMS_OUTPUT.PUT_LINE('Funds transferred successfully');

COMMIT;
```

END;
/

SET SERVEROUTPUT ON;

BEGIN
TransferFunds(1,2,500);
END;
/

SELECT * FROM Accounts;
