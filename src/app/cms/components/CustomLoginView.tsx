import { Typography } from "@firecms/ui";
import { FirebaseLoginView, FirebaseLoginViewProps } from "@firecms/firebase";

export function CustomLoginView(props: FirebaseLoginViewProps) {

    return (
        <FirebaseLoginView
            {...props}
            disableSignupScreen={false}
            noUserComponent={
                <div className="p-4 text-center">
                    <Typography variant="body1">
                        No user found. Please log in.
                    </Typography>
                </div>
            }
        >
            <>

                {/* Heading */}
                <Typography variant="h5" className="mb-2 text-center">
                    Leo Prime Website CMS
                </Typography>
                <Typography variant="body1" className="mb-2 text-center">
                Welcome to Leo Prime Website CMS — the powerful, user-friendly content management system built to simplify your workflow.
                </Typography>
            </>
        </FirebaseLoginView>
    );
}
