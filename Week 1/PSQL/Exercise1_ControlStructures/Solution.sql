
DECLARE
    v_age NUMBER;
BEGIN

    FOR cust IN (
        SELECT CustomerID, DOB
        FROM Customers
    )
    LOOP

        v_age :=
        FLOOR(
            MONTHS_BETWEEN(
                SYSDATE,
                cust.DOB
            ) / 12
        );

        IF v_age > 60 THEN

            UPDATE Loans
            SET InterestRate =
                InterestRate - 1
            WHERE CustomerID =
                cust.CustomerID;

        END IF;

    END LOOP;

    COMMIT;

END;
/



BEGIN

    FOR cust IN (
        SELECT CustomerID, Balance
        FROM Customers
    )
    LOOP

        IF cust.Balance > 10000 THEN

            UPDATE Customers
            SET IsVIP = 'TRUE'
            WHERE CustomerID =
                cust.CustomerID;

        END IF;

    END LOOP;

    COMMIT;

END;
/



SET SERVEROUTPUT ON;

BEGIN

    FOR loan_rec IN (
        SELECT LoanID,
               CustomerID,
               EndDate
        FROM Loans
        WHERE EndDate
              BETWEEN SYSDATE
              AND SYSDATE + 30
    )
    LOOP

        DBMS_OUTPUT.PUT_LINE(
            'Reminder: Loan '
            || loan_rec.LoanID
            || ' for Customer '
            || loan_rec.CustomerID
            || ' is due within 30 days.'
        );

    END LOOP;

END;
/