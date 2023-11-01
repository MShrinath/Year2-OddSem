package JDBC;

import java.sql.*;

public class ConCallableStatement {
    public static void main(String[] args) throws SQLException, ClassNotFoundException {
        // postgresssql
        Class.forName("org.postgresql.Driver");

        String url = "jdbc:postgresql://localhost:5432/AOOP";
        String username = "postgres";
        String password = "shrin";
        Connection con = DriverManager.getConnection(url, username, password);
        // Callable Statement Insertion
        CallableStatement csi = con.prepareCall("{call insertdata(?,?)}");
        csi.setInt(1, 105);
        csi.setString(2, "JAVA");
        csi.execute();
        /*
         * CREATE OR REPLACE FUNCTION insertdata(id integer, name text)
         * RETURNS void AS
         * $$
         * BEGIN
         * INSERT INTO hi(id, name) VALUES (id, name);
         * END;
         * $$
         * LANGUAGE plpgsql;
         */

        // Callable Statement Retrieval
        CallableStatement csr = con.prepareCall("{? = call getdata(?)}");
        csr.registerOutParameter(1, Types.VARCHAR);
        csr.setInt(2, 102);
        csr.execute();
        System.out.println(csr.getString(1));
        /*
         * CREATE OR REPLACE FUNCTION getdata(userId INT)
         * RETURNS VARCHAR(30) AS $$
         * DECLARE
         * userName VARCHAR(30);
         * BEGIN
         * SELECT name INTO userName FROM hi WHERE id = userId;
         * RETURN userName;
         * END;
         * $$ LANGUAGE plpgsql;
         * 
         */

        con.close();
    }
}
