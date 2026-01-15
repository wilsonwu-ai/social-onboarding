import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';
import type { FormData } from '../types';

const COLLECTION_NAME = 'submissions';

export async function submitOnboardingForm(formData: FormData): Promise<string> {
  // Clean up the form data before submitting
  const submissionData = {
    ...formData,
    // Convert empty strings to proper values
    businessType: formData.businessType || 'other',
    hasExistingSocial: formData.hasExistingSocial ?? false,
    // Add metadata
    status: 'new',
    submittedAt: serverTimestamp(),
    // Filter out empty values from arrays
    keyOfferings: formData.keyOfferings.filter(Boolean),
    uniqueSellingPoints: formData.uniqueSellingPoints.filter(Boolean),
    targetAudience: formData.targetAudience.filter(Boolean),
    inspirationLinks: formData.inspirationLinks.filter(Boolean),
    localCompetitors: formData.localCompetitors.filter(Boolean),
    selectedPlatforms: formData.selectedPlatforms.filter(Boolean),
    // Filter out empty social accounts
    existingSocialAccounts: formData.existingSocialAccounts.filter(
      (account) => account.platform && (account.username || account.link)
    ),
  };

  const docRef = await addDoc(collection(db, COLLECTION_NAME), submissionData);
  return docRef.id;
}
