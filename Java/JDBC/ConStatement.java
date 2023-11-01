package JDBC;

import java.sql.*;

public class ConStatement {
    public static void main(String[] args) throws SQLException, ClassNotFoundException {
        // postgresssql
        Class.forName("org.postgresql.Driver");

        String url = "jdbc:postgresql://localhost:5432/AOOP";
        String username = "postgres";
        String password = "shrin";
        Connection con = DriverManager.getConnection(url, username, password);
        // Statement
        Statement stmt = con.createStatement();
        stmt.executeUpdate("create table hi(id int,name varchar(30));");
        stmt.executeUpdate("insert into hi values(2,'ok');");

        // get info
        ResultSet res = stmt.executeQuery("select * from hi;");
        while (res.next()) {
            // print the data in resultset res
            System.out.print(res.getInt(1) + " ");
            System.out.println(res.getString(2));
        }

        con.close();
    }
}
