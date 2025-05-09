"use client"

import { 
    AlertDialog, 
    AlertDialogAction, 
    AlertDialogContent, 
    AlertDialogDescription, 
    AlertDialogFooter, AlertDialogHeader, 
    AlertDialogTitle, 
    AlertDialogTrigger,
    AlertDialogCancel 
} from "@/components/ui/alert-dialog"
import { toast } from "sonner";
import { Id } from "../../convex/_generated/dataModel"
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface RemoveDialogProps{
    documentId: Id<"documents">;
    children: React.ReactNode;
};

const RemoveDialog = ({documentId, children}: RemoveDialogProps) => {
    const router = useRouter();
    const remove = useMutation(api.documents.removeById);
    const [isDeleting, setIsDeleting] = useState(false);
    return (  
        <AlertDialog>
            <AlertDialogTrigger asChild>
                {children}
            </AlertDialogTrigger>
            <AlertDialogContent onClick={(e) => e.stopPropagation()}>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                    <AlertDialogDescription>This will permanently delete your document.</AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={(e) => e.stopPropagation()}>
                        Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction
                        disabled = {isDeleting}
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsDeleting(true);
                            remove({id: documentId})
                                .catch(() => toast.error("Cannot perform this task"))
                                .then(() => {
                                    toast.success("Document removed");
                                    router.push("/");
                                })
                                .finally(() => setIsDeleting(false))
                        }}
                    >
                        Delete
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
 
export default RemoveDialog;