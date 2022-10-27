export const courseDetailDataLoader = async ({ params }) => {

    return fetch(`https://e-learning-server-kappa.vercel.app/courses/${params.id}`)


}