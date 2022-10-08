/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from 'react-hook-form';
import Article from '../../config/models/Article';

function ApprovalForm() {
  const { register, setValue } = useForm();

  return (
    <form>
      <input {...register('moderationStatus')} />
      <button type="button" onClick={() => setValue(Article.moderationStatus, 'approve')}>
        setValue
      </button>
      <button
        type="button"
        onClick={() => setValue(Article.moderationStatus, 'denied', {
          shouldValidate: true,
          shouldDirty: true,
        })}
      >
        setValue options
      </button>
    </form>
  );
}
export default ApprovalForm;
