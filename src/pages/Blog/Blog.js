import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className="collapse my-5">
                <input type="checkbox" />
                <div className="collapse-title text-xl bg-accent font-medium">
                    What is CORS?
                </div>
                <div className="collapse-content bg-neutral text-white my=4">
                    <p>CORS is an acronym for Cross-Origin Resource Sharing. Cross-origin resource sharing (CORS) is a browser mechanism which enables controlled access to resources located outside of a given domain. It extends and adds flexibility to the same-origin policy (SOP).  The CORS workflow starts when a script loaded from one origin attempts to make a request to another origin (thus the name Cross-Origin Resource Sharing). This is all controlled through preflight requests that exchange a set of HTTP request headers and corresponding response headers collectively referred to as "CORS Headers", each of these headers modifies a different element of the Same-Origin policy to loosen the limitations it imposes.</p>
                </div>
            </div>

            <div className="collapse mb-5">
                <input type="checkbox" />
                <div className="collapse-title text-white text-xl; bg-neutral: font-medium bg-neutral">
                    Why are you using firebase? What other options do you have to implement authentication?
                </div>
                <div className="collapse-content bg-accent ">
                    <p>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more. STYTCH.
                        Ory.
                        Supabase.
                        Okta.
                        PingIdentity.
                        Keycloak. are some of the alternatives to firebase.</p>
                </div>
            </div>

            <div className="collapse mb-5">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium bg-accent">
                    How does the private route work?
                </div>
                <div className="collapse-content bg-neutral text-white">
                    <p>  Private Routes in React Router (also called Protected Routes) require a user being authorized to visit a route (read: page). So if a user is not authorized for a specific page, they cannot access it. The most common example is authentication in a React application where a user can only access the protected pages when they are authorized (which means in this case being authenticated). Authorization goes beyond authentication though. For example, a user can also have roles and permissions which give a user access to specific areas of the application.</p>
                </div>

            </div>

            <div className="collapse mb-5">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium bg-neutral text-white">
                    What is Node? How does Node work?
                </div>
                <div className="collapse-content bg-accent">
                    <p>Node.js is a lean, fast, cross-platform JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node.js wastes no time or resources on waiting for I/O requests to return. It is useful for both servers and desktop applications.</p>
                    <p> Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.

                        Node.js basically works on two concept

                        Asynchronous
                        Non-blocking I/O</p>
                </div>
            </div>
        </div>

    );
};


export default Blog;