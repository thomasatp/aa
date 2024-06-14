import { toast } from 'sonner'
import { FormData } from "./contact";

export function sendEmail(data: FormData) {
  const apiEndpoint = '/api/send';

  fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      toast.success(response.message)
    })
    .catch((err) => {
      toast.error('Event has not been created')
    });
}