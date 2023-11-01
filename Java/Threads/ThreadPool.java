package Threads;

import java.util.concurrent.Callable;

// import java.util.concurrent.Executor;

public class ThreadPool {
    
}


//// ExecutorService service;
////// service  =  Executors.newFixedThreadPool(3);

// Executor 

// service.submit(job)

// service.shutdown()






// runnnable jobs and callable jobs

// callable returns som result

// object call()
// future holds the result feom call 
class Mycallable implements Callable<Object>{

    @Override
    public Object call() throws Exception {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'call'");
    }

}


// runnnable wont return 

// void run()