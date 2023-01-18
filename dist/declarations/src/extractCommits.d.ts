type Commit = {
    message: string;
};
declare const extractCommits: (context: any) => Promise<Commit[]>;
export default extractCommits;
