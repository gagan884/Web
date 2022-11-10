// import { FormValidationRules } from "ts-form-validation"

// const rules: FormValidationRules<Required > {
//     fields: {
//       displayName: {
//         required: true,
//         trim: true,
//         validate: (value: string) =>
//           validator.isLength(value, { min: 5, max: 30 }) || {
//             type: MessageType.ERROR,
//             message: 'Display name must be between 5 to 30 characters in length.',
//           },
//       },
//       email: {
//         required: true,
//         trim: true,
//         // We are using validator -library here to do the actual email -check
//         validate: (value: string) =>
//           validator.isEmail(value) || {
//             type: MessageType.ERROR,
//             message: 'Please give a valid email address',
//           },
//       }