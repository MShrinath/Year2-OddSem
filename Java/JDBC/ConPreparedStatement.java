package JDBC;

import java.sql.*;

public class ConPreparedStatement {
    public static void main(String[] args) throws SQLException, ClassNotFoundException {
        // postgresssql
        Class.forName("org.postgresql.Driver");

        String url = "jdbc:postgresql://localhost:5432/AOOP";
        String username = "postgres";
        String password = "shrin";
        Connection con = DriverManager.getConnection(url, username, password);
        // Prepared Statemnt
        String q = "insert into hi values(?,?)";
        PreparedStatement ps = con.prepareStatement(q);

        ps.setInt(1, 100);
        ps.setString(2, "fine");
        ps.executeUpdate();

        con.close();
    }
}
