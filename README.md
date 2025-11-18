## Explain the difference between any, unknown, and never types in TypeScript.

TypeScript ব্যবহার করার সময় আমরা অনেক সময় any, unknown, এবং never টাইপ দেখি।
এগুলো দেখতে একই রকম হলেও ব্যবহার ও উদ্দেশ্য সম্পূর্ণ আলাদা।

### any – “TypeScript চেক বন্ধ করে দেয়”

any মানে হলো ভ্যারিয়েবল যে কোনো মান নিতে পারে এবং TypeScript কোনো চেক করবে না।

```
let value: any = 10;
value = "hello";        
value = {};             
value.toUpperCase();    

```

এটি দ্রুত টেস্ট করার জন্য ভালো।

প্রোডাকশন কোডে ব্যবহার না করাই ভালো, কারণ type-safety হারিয়ে যায় ।


### unknown
unknown ও যে কোনো মান নিতে পারে,
কিন্তু ব্যবহার করার আগে টাইপ চেক করা বাধ্যতামূলক।

```
let value: unknown = "hello";

value.toUpperCase(); 
//  TypeScript don't know it is string or not

```

সঠিক ব্যবহার:

```
if (typeof value === "string") {
  console.log(value.toUpperCase());  
}

```

- API response

- user input

- অনিশ্চিত মান
এ ধরনের ক্ষেত্রে খুবই উপকারী ।

### never
never মানে হলো এই ভ্যারিয়েবল কখনোই কোনো মান পাবে না।
এটা ব্যবহার করা হয় এমন কোডে যেখানে ফাংশন কখনো রিটার্ন করে না
অথবা কোনো condition কখনোই সত্য হবে না।

কখনো রিটার্ন করে না এমন ফাংশন:

```
function throwError(msg: string): never {
  throw new Error(msg);
}

```

লজিক্যাল ভুল ধরতে সাহায্য করে

“এই জায়গায় কখনো আসা উচিত না”—এটা বোঝাতে ব্যবহৃত হয়

## What is the use of enums in TypeScript? Provide an example of a numeric and string enum.

TypeScript-এ enum (enumeration) ব্যবহার করা হয় কিছু নির্দিষ্ট, সম্পর্কিত মানকে একটি গ্রুপে রাখার জন্য।
এগুলো কোডকে আরও পড়তে সহজ, পরিচ্ছন্ন, এবং type-safe করে তোলে।

কেন Enums ব্যবহার করা হয়?

-  কোডে বারবার একই স্ট্রিং/নম্বর ব্যবহার এড়াতে।

- কোডকে আরও readable করতে ।

- ভুল মান (invalid values) ব্যবহার বন্ধ করতে ।

- typo বা spelling mistake প্রতিরোধ করতে ।

```
enum Role {
  Admin,
  User,
  Guest
}

const myRole: Role = Role.Admin;

console.log(myRole); 

```

```
enum Status {
  Success = 1,
  Error = 404,
  Forbidden = 403
}

console.log(Status.Error); // 404

```

```
enum PaymentMethod {
  Card,
  Cash,
  Bkash
}

const pay = (method: PaymentMethod) => {
  if (method === PaymentMethod.Bkash) {
    return "Paying with Bkash";
  }
  return "Other payment";
};

console.log(pay(PaymentMethod.Bkash)); //Paying with Bkash


```
