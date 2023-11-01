package JDBC;

import java.sql.*;

public class Test {
    public static void main(String[] args) throws SQLException, ClassNotFoundException {
        // postgresssql
        Class.forName("org.postgresql.Driver");

        String url = "jdbc:postgresql://localhost:5432/AOOP";
        String username = "postgres";
        String password = "shrin";
        Connection con = DriverManager.getConnection(url, username, password);
        // Statement stmt = con.createStatement();
        // stmt.executeUpdate("create table hi(id int,name varchar(30));");
        // stmt.executeUpdate("insert into hi values(2,'ok');");

        // //prepared statemnt
        // String q = "insert into hi values(?,?)";
        // PreparedStatement ps = con.prepareStatement(q);

        // ps.setInt(1, 100);
        // ps.setString(2,"fine");
        // ps.executeUpdate();

        // callable statement
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
        // CallableStatement cs = con.prepareCall("{call insertdata(?,?)}");
        // cs.setInt(1, 105);
        // cs.setString(2, "JAVA");
        // cs.execute();

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
        CallableStatement cs = con.prepareCall("{? = call getdata(?)}");
        cs.registerOutParameter(1, Types.VARCHAR);
        cs.setInt(2, 102);
        cs.execute();

        System.out.println(cs.getString(1));

        // get info
        // ResultSet res = cs.executeQuery();
        // while (res.next()) {
        // // print the data in resultset res
        // System.out.print(res.getInt(1) + " ");
        // System.out.println(res.getString(2));
        // }

        con.close();
    }
}
